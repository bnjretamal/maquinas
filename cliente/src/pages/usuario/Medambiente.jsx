
import imagen1m from '../../assets/marc-noorman-RxrO8JfhI2k-unsplash.jpg';
import imagen2m from '../../assets/nathan-dumlao-Y3AqmbmtLQI-unsplash.jpg';
import imagen3m from '../../assets/miltiadis-fragkidis-GFJYryUkCVE-unsplash.jpg';


const Medambiente = () => {
  return (
    <div className="vending-machines-sustainability-page container mx-auto p-8 bg-[#000300] mt-[10rem]">
        <div className="hero-section flex items-center mb-40">
          <div className="hero-image flex-shrink-0">
            <img
              src={imagen1m}
              alt=""
              className="object-cover w-96 h-96"
            />
          </div>
          <div className="hero-content ml-4">
            <h2 className="text-4xl text-white font-bold">
              Snacks saludables y amigables con el planeta
            </h2>
            <p className="text-xl text-white font-sans leading-relaxed mt-4">
              En Snack Vending, nos comprometemos a ofrecer opciones de snacks saludables y sostenibles para nuestros clientes. Creemos que es importante disfrutar de snacks deliciosos sin dañar el medio ambiente. Es por eso que tomamos medidas para reducir nuestra huella de carbono y apoyar prácticas sostenibles en toda nuestra cadena de suministro.
            </p>
          </div>
        </div>

        <div className="hero-section flex items-center mb-40">
          <div className="hero-image flex-shrink-0">
            <img
              src={imagen2m}
              alt=""
              className="object-cover w-96 h-96"
            />
          </div>
          <div className="card-content ml-4">
            <h2 className="text-4xl text-white font-bold">
              Ingredientes sostenibles
            </h2>
            <p className="text-xl text-white font-sans leading-relaxed mt-4">
              Utilizamos ingredientes sostenibles siempre que sea posible, como frutas y verduras cultivadas orgánicamente y snacks elaborados con ingredientes naturales. También nos esforzamos por reducir el uso de envases innecesarios y reciclar o reutilizar los materiales siempre que sea posible.
            </p>
          </div>
        </div>


        <div className="hero-section flex items-center">
          <div className="hero-image flex-shrink-0">
            <img
              src={imagen3m}
              alt=""
              className="object-cover w-96 h-96"
            />
          </div>
          <div className="card-content ml-4">
            <h2 className="text-4xl text-white font-bold">
              Máquinas expendedoras eficientes
            </h2>
            <p className="text-xl text-white font-sans leading-relaxed mt-4">
              Nuestras máquinas expendedoras están diseñadas para ser energéticamente eficientes y reducir el consumo de electricidad. También utilizamos refrigerantes ecológicos y materiales reciclados en la fabricación de nuestras máquinas.
            </p>
          </div>
        </div>
    </div>
  );
};

export default Medambiente;
