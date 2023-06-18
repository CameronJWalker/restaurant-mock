import Head from 'next/head';

export default function Menu() {
  const items = [
    {
      id: 1,
      name: 'Chicken Wings',
      Image:
        'https://images.unsplash.com/photo-1585703900468-13c7a978ad86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      Calories: '900-1300',
    },
      {
        id: 2,
        name: "Ribs",
        Image:
          "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
        Calories: "900-1300",
      },
      {
        id: 3,
        name: "Chicken",
        Image:
          "https://images.unsplash.com/photo-1517984055083-fd6e1e788e54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        Calories: "900-1300",
      },
      {
        id: 4,
        name: "BBQ Ribs",
        Image:
          "https://images.unsplash.com/photo-1508615263227-c5d58c1e5821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
        Calories: "900-1300",
      },
      {
        id: 5,
        name: "Chicken Platter",
        Image:
          "https://images.unsplash.com/photo-1562967916-eb82221dfb92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80",
        Calories: "900-1300",
      },
      {
        id: 6,
        name: "Tiny Ribs",
        Image:
          "https://images.unsplash.com/photo-1589895224610-5ae4b4a899ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80",
        Calories: "900-1300",
      },
    ];
  
  
    const handleItems = (itemId) => {
    
    console.log(`Item clicked: ${itemId}`);
  };

  return (
    <div>
      <Head>
        <title>Check out our menu!</title>
      </Head>
      <div>
        <p className="itemH">Our Menu</p>
      </div>
      <div className="itemL">
        {items.map((item) => (
          <div key={item.id} onClick={() => handleItems(item.id)}>
            <img src={item.Image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.Calories}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}