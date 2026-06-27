import pandas as pd
from actions.sync_folder import _load_chunks, _read_pages, _rows
from config import CHUNK_SIZE, CHUNK_OVERLAP

########################
### DOCUMENT LOADING ###
########################


def test_read_pages_plain_text_skips_blank_lines(tmp_path):
    file_path = tmp_path / "notes.txt"
    file_path.write_text("first line\n\n  \nsecond line\n", encoding="utf-8")

    pages = _read_pages(str(file_path))

    # Blank/whitespace-only lines are dropped; the page index is the line number.
    assert pages == [("first line", 0), ("second line", 3)]


def test_load_chunks_short_lines_are_one_chunk_each(tmp_path):
    file_path = tmp_path / "notes.txt"
    file_path.write_text("alpha\nbeta\n", encoding="utf-8")

    chunks = _load_chunks(str(file_path))

    assert chunks == [("alpha", 0), ("beta", 1)]


def test_load_chunks_splits_long_text_with_overlap(tmp_path):
    # A single line longer than CHUNK_SIZE must be split into overlapping windows.
    text = "x" * (CHUNK_SIZE * 2)
    file_path = tmp_path / "long.txt"
    file_path.write_text(text, encoding="utf-8")

    chunks = _load_chunks(str(file_path))
    step = CHUNK_SIZE - CHUNK_OVERLAP

    # Windows start every `step` characters and are at most CHUNK_SIZE long.
    assert len(chunks) == len(range(0, len(text), step))
    assert all(len(chunk_text) <= CHUNK_SIZE for chunk_text, _ in chunks)
    # The second window overlaps the first by CHUNK_OVERLAP characters.
    assert chunks[1][0] == text[step : step + CHUNK_SIZE]


def test_load_chunks_strips_nul_bytes(tmp_path):
    # Postgres text columns reject NUL bytes, so they must be removed.
    file_path = tmp_path / "nul.txt"
    file_path.write_text("a\x00b", encoding="utf-8")

    chunks = _load_chunks(str(file_path))

    assert chunks == [("ab", 0)]


def test_rows_joins_columns_with_index():
    df = pd.DataFrame({"a": [1, 2], "b": ["x", "y"]})

    rows = _rows(df)

    assert rows == [("1, x", 0), ("2, y", 1)]
