import React from 'react'
import {useNavigate} from 'react-router-dom'
const Win = () => {
  const navigate = useNavigate()
  return (
    <div>
        <h1>Você venceu</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis a facere, delectus repellendus dolorum quisquam, tempore esse earum fuga, minima rerum modi! Perspiciatis quam sequi cupiditate quo odit, vero nesciunt!
        </p>
        <button className="btn-jogar-voltar" onClick={() => navigate("/")}>Voltar</button>
    </div>
  )
}

export default Win