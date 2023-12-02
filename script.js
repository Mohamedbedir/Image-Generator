

/*
const api="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";
const inp =document.getElementById('inp');
const images=document.querySelector('.Images')

const getImage=async () =>{
  
    const methods={
        method:"POST",
        Headers:{
            "Content-Type":"application/json",
            "Authorization":' Bearer $api'
        },

        body:JSON.stringify(
            {
                "prompt":inp.value,
                "n":3,
                "size":"256x256"
            }
        )
    }

  
    const res=await fetch("https://api.openai.com/v1/images/generations",methods)

    const data= await res.json()
    console.log(data)

    const listimages=data.data;

    images.innerHTML=''

    listimages.map(photo => {
        const container=document.createElement("div")
        images.append(container)
        const img=document.createElement("img")
        container.append(img)
        img.src=photo.url
    })
}*/
const api = "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";
const inp = document.getElementById('inp');
const images = document.querySelector('.Images');

const getImage = async () => {
    const methods = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api}`
        },
        body: JSON.stringify({
            "prompt": inp.value,
            "n": 3,
            "size": "256x256"
        })
    };

    const res = await fetch("https://api.openai.com/v1/images/generations", methods);
    const data = await res.json();
    console.log(data);

    const listImages = data.data;

    images.innerHTML = '';

    listImages.map(photo => {
        const container = document.createElement("div");
        images.append(container);
        const img = document.createElement("img");
        container.append(img);
        img.src = photo.url;
    });
};
