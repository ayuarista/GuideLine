function categoryItem() {
  return {
    items: [
        { id: 1, icon: "subway-outline", name: "Beach", rating: "4.9" },
        { id: 2, icon: "restaurant-outline", name: "Restaurant", rating: "4.8" },
        { id: 3, icon: "wine-outline", name: "Wine", rating: "4.7" },
        { id: 4, icon: "pizza-outline", name: "Pizza", rating: "4.6" }
      ]
  };
}
function popularPlace(){
    return{
        items:[
            {
                id: 1,
                discount: "20%",
                image: "https://plus.unsplash.com/premium_photo-1707944422423-314b12c3885a?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Indonesia",
                location: "Bali, Nusa Penida",
            },
            {
                id: 2,
                discount: "20%",
                image: "https://images.unsplash.com/photo-1584872589930-e99fe5bf4408?q=80&w=877&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "China",
                location: "China, Beijing",
            },
            {
                id: 3,
                discount: "20%",
                image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Japan",
                location: "Japan, Tokyo",
            },
            {
                id: 4,
                discount: "20%",
                image: "https://images.unsplash.com/photo-1472148439583-1f4cf81b80e0?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Singapore",
                location: "Singapore, Paris",
            },
        ]
    }
}

function trendingPlace(){
    return{
        items:[
            {
                id: 1,
                image: "",
                title: "Beijing Tour",
                desc: "gave an experience, never you felt before.",
                price: "Rp. 5.500.000",
                rating: "4.8 (329)",
                star: 3
            }
        ]
    }
}
