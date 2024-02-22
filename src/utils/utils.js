export function sliderValueToVideoTime(duration, sliderValue) {
    return Math.round((duration * sliderValue) / 100);
}

export const readFileAsBase64 = async (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};

export const download = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '');
    link.click();
};
