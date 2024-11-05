import Image from "next/image";
import Link from "next/link";
import PatientForm from "@/components/forms/PatientForm";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";


export default async function NewAppointment({params: {userId}}: SearchParamProps){
  
  const patient = await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen">

      <section className="remove-scrollbar container ">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image 
            src="/assets/icons/logo-full1.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            type="create" 
            patientId={patient.$id}
            userId={userId}/>

          <p className="copyright mt-8 py-10">
              © 2024 HealthCare
          </p>
          
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  )
}
