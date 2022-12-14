import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { useContext, useEffect } from "react"
import illustration from "../../assets/illustration.png"
import { CartContext } from "../../contexts/CartContext"
import { IconsSuccess, SuccessContainer } from "./styles"


export function Success() {

    const { deliveryData, clearCart } = useContext(CartContext);

    useEffect(() => {
        clearCart();
    },[]);

    return (
        <SuccessContainer>
            <header>
                <h2>Uhu! Pedido confirmado</h2>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </header>
            <main>
                <div className="delivery-info">
                    <div>
                        <IconsSuccess color="purple"><MapPin size={18}/></IconsSuccess>
                        <div>
                            <p>Entrega em <strong>{deliveryData.address}</strong></p>
                            <p>{deliveryData.district} - {deliveryData.city}, {deliveryData.state}</p>
                        </div>
                    </div>
                    <div>
                        <IconsSuccess color="yellow"><Timer size={18}/></IconsSuccess>
                        <div>
                            <p>Previsão de entrega</p>
                            <p><strong>20 min - 30 min </strong></p>
                        </div>
                    </div>
                    <div>
                        <IconsSuccess color="yellowDark"><CurrencyDollar size={18}/></IconsSuccess>
                        <div>
                            <p>Pagamento na entrega</p>
                            <p><strong>{deliveryData.formPayment}</strong></p>
                        </div>
                    </div>
                </div>
                <div className="illustration">
                    <img src={illustration}/>
                </div>
            </main>
        </SuccessContainer>
    )
}