import { fireEvent, render, screen } from '@testing-library/react'
import App from '../App'

describe('App Component', () => {
  it('should start tag p with value zero', () => {
    render(<App />)
    const p = screen.getByText(/Valor: 0/i)

    expect(p).toBeInTheDocument()
  })

  it('should return the text of button', () => {
    render(<App />)

    const TEXT_INCREMENT = 'Aumentar'
    // const TEXT_DECREMENT = 'Diminuir'
    const button = screen.getByText(TEXT_INCREMENT)

    expect(button.textContent).toBe(TEXT_INCREMENT)
  })

  describe('All clicks of a button event and value initial', () => {
    it('should render counter with zero initial valueo', () => {
      const { getByText } = render(<App />)
      const valor = getByText(/Valor: 0/i)
      expect(valor).toBeInTheDocument()
    })

    it('deve increment the counter by clicking the increase button', () => {
      const { getByText } = render(<App />)

      const p = getByText(/Valor: 0/i)
      const incrementarBotao = getByText(/Aumentar/i)

      fireEvent.click(incrementarBotao)
      expect(p).toHaveTextContent('Valor: 1')
    })

    it('should decrement the counter by clicking the decrease button', () => {
      const { getByText } = render(<App />)

      const p = getByText(/Valor: 0/i)
      const decrementarBotao = getByText(/Diminuir/i)

      fireEvent.click(decrementarBotao)
      expect(p).toHaveTextContent('Valor: -1')
    })
  })
})
