import Pet from "./Pet";

const Results = ({ pets }) => {
  console.log(pets);
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            name={pet.name}
            animal={pet.animal}
            location={`${pet.city}, ${pet.state}`}
            images={pet.images}
            breed={pet.breed}
          />
          //   <Pet {...pet} key={pet.id} />
        ))
      )}
    </div>
  );
};

export default Results;
