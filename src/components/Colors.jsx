import { useState } from "react";


function Colors() {

    const colors = [
        { id: 'blue', name: 'Titânio Azul', Image: '/img/iphone-blue.jpg', colorClass: 'bg-blue-500' },
        { id: 'silver', name: 'Titânio Natural', Image: '/img/iphone-silver.jpg', colorClass: 'bg-gray-500' },
        { id: 'orange', name: 'Titânio Laranja', Image: '/img/iphone-orange.jpg', colorClass: 'bg-orange-500' }
    ];

    const models = [
        { name: 'Pro Max', screen: '6.9 polegadas', storage: '256gb, 512gb, 1tb', battery: '33h de reprodução de vídeo', weight: '221g' },
        { name: 'Pro', screen: '6.3 polegadas', storage: '128gb, 256gb, 512gb', battery: '29h de reprodução de vídeo', weight: '199g' }
    ];

    const [selectedColor, setSelectedColor] = useState('blue')



    return (

        <section id="colors" className="bg-black py-20 px-8">

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">

                    <h2 className=" text-5xl mb:text-6xl font-bold mb-4"> Escolha sua cor</h2>
                    <p className="text-2xl font-semibold text-gray-400">Quatro  acabamento de titânio lindos</p>
                </div>


                <div className="flex justify-center mb-12">
                    <div className="relative w-full max-w-3xl">
                        <div className="relative flex  items-center  justify-center min-h-[500px]">
                            <img src={colors.find(color => color.id === selectedColor).Image} alt="iphone" className="max-w-full max-h-[600px] mx-auto">
                            </img>
                        </div>
                        <div className="absolute bottom-8 left-0 right-0 text-center">
                            <div className="px-8 py-4 rounded-full backdrop-blur-md bg-black/40 inline-block">
                                <h3 className="text-2xl font-semibold"> {colors.find(color => color.id === selectedColor).name}</h3>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex justify-center gap-4">
                    {colors.map((color) => (
                        <button key={color.id} onClick={() => setSelectedColor(color.id)} className={`w-12 h-12 rounded-full border-4 ${selectedColor === color.id ? 'border-white' : 'border-gray-700'} flex items-center justify-center`}>
                            <div className={`w-8 h-8 rounded-full ${color.colorClass}`}></div>
                        </button>
                    ))}
                </div>

                <div className="grid gap-8 mt-20 grid-cols-2 ">
                    {models.map((model, index) => (
                        <div key={index} className="bg-linear-to-br from-gray-900 to-transparent rounded-3xl p-8 border-2 border-gray-500">
                            <div className="text-4xl mb-4">📱</div>
                            <h3 className="text-2xl font-bold mb-3">{model.name}</h3>
                            <ul className="text-gray-300 space-y-2">
                                <li><strong>. Tela:</strong> {model.screen}</li>
                                <li><strong>. Armazenamento:</strong> {model.storage}</li>
                                <li><strong>. Bateria:</strong> {model.battery}</li>
                                <li><strong>. Peso:</strong> {model.weight}</li>
                            </ul>
                        </div>
                    ))}

                </div>

                <div className="text-center mt-16 space-y-4">
                    <button className="bg-blue-700 hover:bg-blue-800 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 mb-8 hover:scale-105 shadow-md-500/50 cursor-pointer">
                        Compre agora á partir de R$ 9.999,00
                    </button>
                    <p>
                        Ou parcele em 12x de R$ 833,25 sem juros
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Colors