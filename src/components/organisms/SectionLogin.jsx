import { useState, useEffect  } from "react";
import { Node, LinkedList } from "../../data/LinkedList.js";
import Swal from "sweetalert2";
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import SectionTable from "./SectionTable";
import './SectionLogin.css';

function SectionLogin() {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [numero, setNumero] = useState('');
    const [hombre, setHombre] = useState(false);
    const [mujer, setMujer] = useState(false);
    const [grado, setGrado] = useState('');
    const [grupo, setGrupo] = useState('');

    const [alumnosList, setAlumnosList] = useState(new LinkedList());

    useEffect(() => {
        console.log("Lista de alumnos actualizada:");
        alumnosList.print();
    }, [alumnosList]);

    const handlerClick = (event) => {
        const nuevoAlumno = {
            nombre,
            apellidos,
            numero,
            hombre,
            mujer,
            grado,
            grupo
        };

        const updatedList = new LinkedList();
        let current = alumnosList.head;
        while (current) {
            updatedList.insert(current.data);
            current = current.next;
        }
        updatedList.insert(nuevoAlumno);

        setAlumnosList(updatedList);

        Swal.fire({
            title: "Perfecto!",
            text: `El alumno ${nombre} ${apellidos} ha sido registrado correctamente.`,
            icon: "success",
            footer: '<h2>Powered by GitHub :D</h2>',
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

            <SectionTable studentsList={alumnosList} />
        </>
    );
}

export default SectionLogin;
