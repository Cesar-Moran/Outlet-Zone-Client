import { useEffect, useState } from "react";

export const RegisterRequests = () => {
  const [registerRequests, setRegisterRequests] = useState([
    {
      id: 0,
      email: "",
      createdAt: "",
      role: "",
      password: "",
    },
  ]);

  const acceptRequest = async (id: number) => {
    const requestToAccept = registerRequests.find((r) => r.id === id);

    if (!requestToAccept) {
      console.error(`No se encontró la solicitud con ID ${id}`);
      return;
    }
    await fetch(`http://localhost:4000/api/acceptRequest/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestToAccept),
    });
  };

  const denieRequest = async (id: number) => {
    const requestToDenie = registerRequests.find((r) => r.id === id);
    if (!requestToDenie) {
      console.error(`No se encontró la solicitud con ID ${id}`);
      return;
    }
    await fetch(`http://localhost:4000/api/denieRequest/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestToDenie),
    });

    window.location.reload();
  };

  const getRegisterRequests = async () => {
    const response = await fetch("http://localhost:4000/api/registerRequests");
    const data = await response.json();
    setRegisterRequests(data);
  };

  useEffect(() => {
    getRegisterRequests();
  }, []);

  return (
    <div className="min-h-screen flex   justify-center items-center mx-auto">
      {registerRequests.length <= 0 ? (
        <div className="flex flex-col gap-4 ">
          <img
            src="https://outletzone7.files.wordpress.com/2023/11/no-results-found.png"
            alt=""
            className="h-[80px] w-[80px] mx-auto"
          />
          <p className="text-xl">No hay ninguna solicitud pendiente</p>
        </div>
      ) : (
        <div className="flex   justify-center items-center mx-auto gap-8 flex-col w-full max-w-xl">
          {registerRequests.map((request) => (
            <div key={request.email} className="text-black w-full max-w-sm">
              <p>ID: {request.id}</p>
              <p> {request.email}</p>
              <p>{request.createdAt}</p>
              <p>{request.password}</p>
              <p>{request.role}</p>
              <div className="flex items-center  justify-between gap-5">
                <button
                  className="uppercase btn bg-green-500 border-none w-full text-white hover:bg-green-700"
                  onClick={() => acceptRequest(request.id)}
                >
                  Si
                </button>
                <button
                  className="uppercase btn bg-red-500 border-none w-full text-white hover:bg-red-700"
                  onClick={() => denieRequest(request.id)}
                >
                  No
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
