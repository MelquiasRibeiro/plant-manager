export default function parseStringAsArry(arryAsString) {
    return (arryAsString = arryAsString.split(',').map((tech) => tech.trim()));
}
