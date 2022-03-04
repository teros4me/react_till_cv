async function getRepo()
{
  let response = await fetch("https://api.github.com/users/teros4me/repos");
  let data = await response.json();
  console.log(data[0].name);
  console.log(data[0].description);
  document.querySelector(".reponame").innerHTML = data[0].name;
  document.querySelector(".repodesc").innerHTML = data[0].description;
  document.querySelector(".reponame").setAttribute("href", data[0].html_url);
}

getRepo();