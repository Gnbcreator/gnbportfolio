export default async function getData(props) {
    let data = await fetch(`http://localhost:3000/api/user`)
    let userData = await data.json();
    return userData;
    console.log(props)
}