import React, { useEffect, useState } from 'react'

export const Buys = () => {
    const [pedido, setPedido] = useState([])
    const [pagar, setPagar] = useState(0)
    const pedidos = localStorage.getItem('buys')

    useEffect(() => {
        setPedido(JSON.parse(pedidos));
    }, [pedidos])

    useEffect(() => {
        const totalSuma = pedido.reduce((acc, p) => acc + p.precio, 0);
        setPagar(totalSuma)

    }, [pedido])

    function remove(i) {
        console.log(pedido);
        const pedActual = pedido.filter((_, index) => index !== i)
        localStorage.setItem('buys', JSON.stringify(pedActual))
        setPedido(pedActual);

    }

    return (
        <section className='flex flex-col min-h-screen w-full items-center py-8 gap-4 bg-[#f17fc4]'>
            <section className='flex flex-col gap-4 bg-[#fcb0dd] py-8 px-12 rounded-lg'>
            <h1 className='text-xl font-semibold mb-4 text-center'> Tu lista de compras </h1>
                {pedido &&
                    pedido.map((p, i) => (
                        <section key={i} className='flex flex-col gap-4 py-4 border-b-[2px] border-[#f17fc4]'>
                            <h2>Articulo: {p.nombre}</h2>
                            <span>Precio: S/ {(p.precio).toFixed(2)}</span>
                            <button onClick={() => remove(i)} className='bg-[#f17fc4] py-1 w-full text-white rounded-lg'> Eliminar Articulo </button>
                        </section>
                    ))
                }
                <h2 className='font-semibold border-[2px]  border-[#f17fc4]  rounded-lg p-4'>Total a Pagar: S/ {(pagar).toFixed(2)} </h2>

            </section>


        </section>
    )
}
