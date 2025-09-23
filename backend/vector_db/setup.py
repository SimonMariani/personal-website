from pymilvus import DataType
from .connections import milvus_client, openai_client, embedding_model
from .utility import emb_text


def setup_vector_db():
    # Obtain the embedding dimension
    embedding_dim = len(emb_text("text to get the embedding dimension", openai_client, embedding_model))

    # Create the schema for the text database
    schema = milvus_client.create_schema(
        auto_id=True,
        enable_dynamic_field=True,
    )

    schema.add_field(field_name="id", datatype=DataType.INT64, is_primary=True)
    schema.add_field(field_name="filename", datatype=DataType.VARCHAR, max_length=256)
    schema.add_field(field_name="file_path", datatype=DataType.VARCHAR, max_length=256)
    schema.add_field(field_name="page", datatype=DataType.INT64)
    schema.add_field(field_name="vector", datatype=DataType.FLOAT_VECTOR, dim=embedding_dim)
    schema.add_field(field_name="text", datatype=DataType.VARCHAR, max_length=65535)

    # Create the index params
    index_params = milvus_client.prepare_index_params()
    index_params.add_index(field_name="id", index_type="STL_SORT")
    index_params.add_index(field_name="vector", index_type="IVF_FLAT", metric_type="IP", params={"nlist": 128})

    # Return the embedding dimension, schema and index params
    return embedding_dim, schema, index_params


embedding_dim, schema, index_params = setup_vector_db()
