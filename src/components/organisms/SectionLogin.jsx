import { useState } from "react";
import { Node, LinkedList } from "../../data/LinkedList.js";
import Swal from "sweetalert2";
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import './SectionLogin.css';

function SectionLogin() {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [numero, setNumero] = useState('');
    const [hombre, setHombre] = useState(false);
    const [mujer, setMujer] = useState(false);
    const [grado, setGrado] = useState('');
    const [grupo, setGrupo] = useState('');

    const linkedList = new LinkedList();

    const handlerClick = (event) => {
        linkedList.insert({
            nombre,
            apellidos,
            numero,
            hombre,
            mujer,
            grado,
            grupo
        });

        let linkedListData = "";
        let current = linkedList.head;
        while (current) {
            linkedListData += `Nombre: ${current.data.nombre},\n 
            Apellidos: ${current.data.apellidos}\n Numero de Lista: ${current.data.numero},\n 
            Hombre: ${current.data.hombre ? 'Si' : 'No'},\n
            Mujer: ${current.data.mujer ? 'Si' : 'No'},\n
            Grado: ${current.data.grado} y Grupo: ${current.data.grupo}`
            current = current.next;
        }

        console.log("Informacion de la LinkedList:");
        linkedList.print();

        Swal.fire({
            title: "Perfecto!",
            text: `El alumno ${nombre} ${apellidos} ha sido registrado correctamente.`,
            icon: "success",
            footer: '<h2>Powered by GitHub :D</h2>',
            //imageUrl: "https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg",
            //imageHeight: 250,
            //imageAlt: "React Image",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Entendido!"
          })
        // Limpiar los campos del formulario
        setNombre(''); setApellidos(''); setNumero(''); setHombre(false); setMujer(false); setGrado(''); setGrupo('');      
    }

    return (
        <>
            <div id="login_section">
                <h1 id="login_title">Formulario para registro de Alumnos</h1>
                <Field type="text" placeholder="Ingrese el Nombre del Alumno" text="Nombre" val={nombre} fnVal={setNombre} />
                <Field type="text" placeholder="Ingrese el Apellidos del Alumno" text="Apellidos" val={apellidos} fnVal={setApellidos} />
                <Field type="number" placeholder="Ingrese el Numero de lista del Alumno" text="Numero de Lista" val={numero} fnVal={setNumero}/>
                <label id="checkbox">
                    <input type="checkbox" checked={hombre} onChange={(e) => setHombre(e.target.checked)} />
                    Hombre
                </label>
                <label id="checkbox">
                    <input type="checkbox" checked={mujer} onChange={(e) => setMujer(e.target.checked)} />
                    Mujer
                </label>
                <Field type="number" placeholder="Ingrese el Grado del Alumno" text="Grado" val={grado} fnVal={setGrado} />
                <Field type="text" placeholder="Ingrese el Grupo del Alumno" text="Grupo" val={grupo} fnVal={setGrupo} />
                
                <Button title="Enviar Formulario" onclick={handlerClick}/> 
            </div>

            {/*<div id="sectionListaAlumnos">*Este apartado aun no es funcional*
                <h2>Lista de Alumnos Registrados</h2>
                <div id="ul">
                    <ul>
                        <li>Pepe1</li>
                        <li>Pepe2</li>
                        <li>Pepe3</li>
                        <li>Pepe4</li>
                        <li>Pepe5</li>
                    </ul>
                </div>
            </div>*/}
        </>
    );
}

export default SectionLogin;
