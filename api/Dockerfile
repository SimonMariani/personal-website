##################
### BASE STAGE ###
##################
FROM python:3.12-slim AS base

# Set environment variables to prevents Python from writing .pyc files and to ensure output is not buffered which allows for real-time logging
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1 

# Set the working directory
WORKDIR /app

# Install Python dependencies
COPY requirements.txt .
RUN --mount=type=cache,target=/root/.cache/pip \
    --mount=type=bind,source=requirements.txt,target=requirements.txt \
    python -m pip install -r requirements.txt

# Install wget for healthcheck
RUN apt-get update && apt-get install -y wget

# Cleanup
RUN rm -rf /var/lib/apt/lists/*

# Copy project files
COPY . .


#########################
### DEVELOPMENT STAGE ###
#########################
FROM base AS development

# Expose Django's development server port
EXPOSE 8000

# Command to run the development server
CMD ["fastapi", "dev", "main.py", "--host", "0.0.0.0", "--port", "8000"]
    

########################
### PRODUCTION STAGE ###
########################
FROM base AS production

# Expose WSGI port
EXPOSE 80

# Command to run the production server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]
