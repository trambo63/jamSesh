export default function listJams(jams){
    return `
            
        <ul class="info-collection">
            ${jams.map(jam => {
                return `
                
                <section class="info-details">
                    <li><h3 class="jam__name" id="${jam.jamId}">Title: ${jam.name}</h3>
                    <li><div>${jam.description}</div>
                    <li><h3>Where: ${jam.location}</h3>
                    <li><h3>When: <input type="datetime-local" readonly="readonly" value="${jam.eventDate}"></h3>
                    <button class="jam-details__button" id="${jam.jamId}">Jam Details</button>

                    <img class="jam__name" src="images/jamIcon.png" alt="${jam.image}" width="25px" height="25px"></img>
                </a>
            </li>
        </section>
       
    `
}).join("")}           
</ul>
<section class="add-jam">
        <button class="add-jam__button">Create Jam </button>
        </section>
`
}