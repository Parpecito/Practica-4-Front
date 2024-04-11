import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { useSignal } from "@preact/signals";
import Shower from "../components/Shower.tsx";
import HiButton from "./HiButton.tsx";
import { FunctionComponent } from "preact";



const Hihihi:FunctionComponent = () => {
  
  return (
    <div class="formBody">
      <form class="formBox" method="get" target="/HiR">
        <h3>Say hi hi hi</h3>
        <input type="text" name="nombre" placeholder={"Name"} />
        <br />
        <input type="text" name="apellido" placeholder={"Last name"} />
        <br />
        <HiButton>
          Hi!
        </HiButton>
      </form>
      
    </div>
  );
};

export default Hihihi;
