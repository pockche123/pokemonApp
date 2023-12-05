import React from 'react'

const PokemonForm = ({handleSubmit, name, setName}) => {



  return (
      
          <form aria-label="enter name" onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="name">Enter name here:</label>
                  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                  <input type="submit" value='Add'/>
              </div>
          </form>
          

  )
}

export default PokemonForm