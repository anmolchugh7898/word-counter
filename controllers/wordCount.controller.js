const langdetect = require('langdetect');
const iso6391 = require('iso-639-1');

exports.getWordsCount = async (req, res) => {
    try {
        const { word } = req.body;

        if (!word) {
            return res.status(400).json({ error: 'Word property not found in request body' });
        }

        // Detect language of words entered
        const languageId = await detectLanguageCode(word);

        // Get the name of the language detected from the code
        const detectedLanguageName = await getLanguageNameByCode(languageId);

        // Get words count
        const wordCount = await countWords(word);

        // Get words count
        const letterCount = await countLetters(word);

        const Obj = {
            "language" : detectedLanguageName,
            "wordCount" : wordCount,
            "letterCount" : letterCount,
        }

        res.status(200).json({ status: 200, success: true, message: "Total words count", data: [Obj] });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function detectLanguageCode(word) {
    // Detect the language
    const detectionResults = langdetect.detect(word);

    // Get the first detected language code
    const detectedLanguageCode = detectionResults[0].lang;

    return detectedLanguageCode;
}

async function getLanguageNameByCode(languageId) {
    // Map the language code to the corresponding name using iso-639-1
    const detectedLanguageName = iso6391.getName(languageId) || 'Unknown';

    return detectedLanguageName;
}

async function countWords(word) {
     // Split the text into words
     const words = word.split(/\s+/);

     // Count the number of words
     const wordCount = words.length;
     return wordCount;
}

async function countLetters(text) {
    // Remove non-alphabetic characters
    const cleanText = text.replace(/[^a-zA-Z\u00C0-\u1FFF\u2C00-\uD7FF\w]/gu, '');
    return cleanText.length;
}


