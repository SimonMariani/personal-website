import json
from fastapi.testclient import TestClient
import main
from main import app

client = TestClient(app)


#############
### PING ###
#############


def test_ping_returns_pong():
    response = client.get("/ping/")
    assert response.status_code == 200
    assert response.json() == {"value": "pong"}


###############
### ANSWER ###
###############


def test_answer_returns_response(monkeypatch):
    # Stub the LLM/DB-backed answer() so the route can be tested in isolation.
    monkeypatch.setattr(main, "answer", lambda text, previous: f"reply to: {text}")

    body = {
        "message": {"sender": "user", "text": "hello", "timestamp": "2026-01-01T00:00:00Z"},
        "previousMessages": [{"sender": "user", "text": "hi"}],
    }
    response = client.post("/answer/", json=body)

    assert response.status_code == 200
    assert response.json() == {"response": "reply to: hello"}


def test_answer_unwraps_item_key(monkeypatch):
    # robotalp sends the payload as a JSON string under an "item" key.
    monkeypatch.setattr(main, "answer", lambda text, previous: text.upper())

    inner = {"message": {"sender": "user", "text": "hello"}, "previousMessages": []}
    response = client.post("/answer/", json={"item": json.dumps(inner)})

    assert response.status_code == 200
    assert response.json() == {"response": "HELLO"}


def test_answer_rejects_invalid_body(monkeypatch):
    # A message without the required "text" field is invalid input.
    monkeypatch.setattr(main, "answer", lambda text, previous: "should not be called")

    response = client.post("/answer/", json={"message": {"sender": "user"}})

    assert response.status_code == 422
