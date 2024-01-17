# Node.js word counter API

This is a word counting service that also includes a letter counting and language detection feature. The front-end implementation is not provided here. The API service is designed to receive a text input and subsequently provide the word count, letter count, and identify the language in which the text is written. It's worth noting that this service does not utilize a database.

## Screenshots

![Working](https://ibb.co/z2K2jbZ)

## Run Locally

Clone the project

```bash
  git clone https://github.com/anmolchugh7898/word-counter.git
```

Go to the project directory

```bash
  cd word-counter
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## API Reference

### Shorten URL

```http
  POST /api/word-count
```

| Field | Type   | Description  |
| :---- | :----- | :----------- |
| Body  | `json` | Original Url |

**Example:**

```http
POST http://localhost:3333/api/word-count
Content-Type: application/json

{
    "word": "संपादन और प्रूफरीडिंग: संपादन प्रक्रिया के दौरान शब्द संख्या वृद्धि या कमी की आवश्यकता वाले क्षेत्रों की पहचान के लिए उपयुक्त हो सकती है। यह एक संतुलित और संरचित दस्तावेज़ बनाए रखने के लिए एक उपयुक्त मापदंड है। "
}

```