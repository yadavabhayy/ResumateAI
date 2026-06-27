function getFileExtension(file) {
    const name = file && file.name ? file.name : "";
    const parts = name.split(".");
    return parts.length > 1 ? parts[parts.length - 1].toLowerCase() : "";
}

async function extractResumeText(file, pdfjsLib, readTextFile) {
    if (!file) {
        throw new Error("No file selected.");
    }

    const extension = getFileExtension(file);

    if (extension === "pdf") {
        if (!pdfjsLib || typeof pdfjsLib.getDocument !== "function") {
            throw new Error("PDF reader is not available in this browser.");
        }

        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        let text = "";

        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
            const page = await pdf.getPage(pageNumber);
            const content = await page.getTextContent();
            text += content.items.map(item => item.str).join(" ") + " ";
        }

        return text.trim();
    }

    if (extension === "txt" || extension === "md") {
        if (typeof readTextFile === "function") {
            return (await readTextFile(file)).trim();
        }

        if (typeof file.text === "function") {
            return (await file.text()).trim();
        }

        throw new Error("Text file reader is not available.");
    }

    throw new Error("Please upload a PDF or TXT resume.");
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        extractResumeText,
        getFileExtension
    };
}

if (typeof window !== "undefined") {
    window.ResumeUtils = {
        extractResumeText,
        getFileExtension
    };
}
