export default function convertSecondsToDuration(seconds: string) {
    const secondsNum = Number(seconds);
    const hours = Math.floor(secondsNum / 3600);
    const minutes = Math.floor((secondsNum % 3600) / 60);
    const remainingSeconds = Math.floor(secondsNum % 60);

    let hoursString = hours.toString();
    let minutesString = minutes.toString().padStart(2, "0");
    let secondsString = remainingSeconds.toString().padStart(2, "0");

    if (hoursString === "0") {
        return `${minutesString}:${secondsString}`;
    }

    return `${hoursString}:${minutesString}:${secondsString}`;
}
