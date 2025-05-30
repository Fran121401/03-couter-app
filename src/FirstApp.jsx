import PropTypes  from "prop-types";

//Los Objetos no son permitidos
    // const newMessage = {
    //     message: 'Hola Mundo',  
    //     title: 'Fran'

    // };

    // const getMensaje = () => {
    //     return 4 + 4;
    // }

export const FirstApp = ({title, subTitle}) => {

    // if (!title) {
    //     throw new Error("El titulo no existe");
    // }

    return (
    <>
    {/*<code>{JSON.stringify(newMessage) }</code> */}
    <h1>{title}</h1>
    <p>{subTitle}</p>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number,
}
