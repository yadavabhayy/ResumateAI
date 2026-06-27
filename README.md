# ResumateAI

ResumateAI is an AI-powered ATS resume analyzer and interview prep tool.

## Project Structure

- **Frontend**: HTML, CSS, JavaScript files for the web interface.
- **Backend**: Spring Boot backend.

## Setup Instructions

### Frontend
1. Navigate to the `Frontend` directory.
2. Copy `config.example.js` to `config.js` and add your OpenRouter API Key:
   ```javascript
   const CONFIG = {
       OPENROUTER_API_KEY: "your_api_key_here",
       OPENROUTER_MODEL: "google/gemini-2.5-flash-lite"
   };
   ```
3. Open `index.html` in your web browser.

### Backend
1. Navigate to the `Backend` directory.
2. Create `src/main/resources/application-local.properties` (this file is git-ignored) and add your API key if needed, or update `application.properties` with your environment variables.
3. Run the Spring Boot application using Maven:
   ```sh
   ./mvnw spring-boot:run
   ```

## Requirements
- Java 17+
- A modern web browser
