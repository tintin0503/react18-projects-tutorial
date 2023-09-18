import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { caculateTotals } from './features/cart/cartSlice'
import { useEffect } from 'react'
import Modal from './components/Modal'

function App() {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)

  useEffect(() => {
    dispatch(caculateTotals())
  }, [cartItems])

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
