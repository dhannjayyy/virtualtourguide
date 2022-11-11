const API_URL = "https://apis.mappls.com/advancedmaps/v1";

async function GET_API() {
  const response = await fetch(`${API_URL}${`/9756e4ab723995b33a4621b276f7bdc4/map_load?v=1.5`}`)

    // );
    console.log(response)

  return response;
}

export default GET_API;