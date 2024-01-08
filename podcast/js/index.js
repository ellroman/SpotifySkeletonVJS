/* U_n1GDEffhjn6rSqChPl46lxgEsoO7tD71NkO7JC2dQ
oGRUOg2kK0mtoavg99jfzBVOng9dSlROWUrRxqssepw -->secret
*/ 
let bearer_token = "BQA3rWY9YQmUxI8XgJ9I2R1UVIjKs3GNV4HfH8LOS1fEd6BAXBM1YonsmsIdrYDL8rTm7xARVhW4Ot6EHdJ5Jn7SpziHhRIG2ZcHx7v2y-ppMPsH9iUkWr7nPVA-3bnV1siqttFqCeQ4c4qcFDTkARVGBy5l2DwKVVOPu-Vxw7SLs8wbgSGqk_l0JN5PLj0m0sSPSNlnnKCyTc1KmBONNrJSpcbcuGcpEH3AW-dsT3ATmigetEpaWDvA8at7czGGZPBVunLckBe91yNSFUxY-APH";
let url = "https://api.spotify.com/v1/shows";
let bearer = "Bearer " + bearer_token;





function fetch_featured(){
    let show_id = "2nIvarXvvZcp1cePx69x9N"
    fetch(url+"?ids="+show_id+"&market=US", {
        method:"GET",
        headers:{
            'Authorization':bearer,
            'Accept':'application/json',
            'Content-Type':'application/json',
        }

    })
    .then((data)=>{return data.json()})
    .then((data)=>{
        let show = data.shows[0]
        let featured_html = `
         <div class='featured'>
                <img src='${show.images[1].url}' />
            
                <div>
                    <h2>${show.name}</h2>
                    <h4>${show.description}</h4>
                    <h3>Don't forget to listen to today's episode</h3>
                    <button>Listen Now</button>
                </div>
            </div>    
        `

        document.getElementById("featured").innerHTML = featured_html;

    })

}

function fetch_latest(){
    let show_ids= "2nIvarXvvZcp1cePx69x9N%2C5lY4b5PGOvMuOYOjOVEcb9%2C6xpiit8aJmwDHk1rKdxmri";

    fetch(url+"?ids="+show_ids+"&market=US", {
        method:"GET",
        headers:{
            'Authorization':bearer,
            'Accept':'application/json',
            'Content-Type':'application/json',
        }

    })
    .then((data)=>{return data.json()})
    .then((data)=>{data.shows.forEach(show => {
        let show_html = `
        
        <div class='show' onClick='location.href = "${show.external_urls.spotify}"'>
            <img src='${show.images[1].url}' />
        
        <div>
            <h4>${show.name}</h4>
            <h5>${show.publisher}</h5>
         </div>
    </div>
    `;


    document.getElementById("shows").innerHTML += show_html;
        
    });
    
})
.catch(console.log)

}


function fetch_all(){
    fetch_featured();
    fetch_latest();
}