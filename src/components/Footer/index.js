import React from 'react'

    /**
   * devuelve el renderizado del footer
   * @author Maicol Mendietta
   */
const index = () => {
  return (
    <div>
 <footer className="color_green footer h-200">
      <div className="d-flex justify-content-center align-items-center">
        <p>&copy; {new Date().getFullYear()}Agrolivery</p>
      </div>
    </footer>        
        </div>
  )
}

export default index