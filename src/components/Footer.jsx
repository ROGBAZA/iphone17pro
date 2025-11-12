

function Footer() {

    const sections = [
        {
            title: "Comprar e Saber Mais",
            links: ["Iphone 17 Pro", "Iphone 17 Pro Max", "Comprar Modelos"]
        },

        {
            title: "Especificações",
            links: ["Características Técnicas", "Câmera", "Bateria", "Display"]
        },

        {
            title: "Legal",
            links: ["Termos de Serviço", "Política de Privacidade", "Cookies"]
        },
    ];

    const buttonLinks = ["Política de Privacidade", "Termo de Uso", "Vendas"]



    return (
        <footer className="bg-gray-900 border-gray-800 text-white py-8 mt-16">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h4 className="font-semibold mb-4 text-xl">{section.title}</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                {section.links.map((link, LinkIndex) => (
                                    <li key={LinkIndex}>
                                        <a className="hover:text-white transition-all duration-300 cursor-pointer" href="#">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}


                </div>
            </div>

            <div className="border-t border-gray-800 pt-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500 font-bold">
                        Copyrigth © 2025 iPhone17Pro. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-6 text-xl text-gray-400">
                        {buttonLinks.map((link, index) => (
                            <a href="#" key={index}>{link}</a>
                        ))}
                    </div>
                              <p className="text-xs text-gray-500 mt-6"   >
                    Site desenvolvido por Roger Ayala Dev, para fins Educacionais e Demonstrativos.
                </p>    

                </div>
                 
                 
            </div>

        </footer >
    )
}



export default Footer