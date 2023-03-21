
export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=SIGy6XEP9dnEwAJF21t6gFU0Yt9Ey4vx&q=${ category }&limit=10`
    const resp = await fetch( url );
    const { data } = await resp.json();
   
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    console.log(gifs)

    return gifs; 
   }
   