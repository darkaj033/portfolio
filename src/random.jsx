function Random(){
  const number = Math.random()*10000000000;

  return <h1 className="text-center">
    Your Luck random number is : {Math.round(number)}
  </h1>
}

export default Random;