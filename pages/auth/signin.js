import {getProviders,signIn} from "next-auth/react";
import React from 'react'
import Header from "../../components/Header";

function signin({providers}) {
    console.log("hello");
    console.log(providers);
    return (
        <>
        <Header />
        <div className="mt-40">
           
        {/* {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button className="p-3 bg-blue-500 rounded-lg text-white"
            onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))} */}

        </div>
       
      </>
    )
}

export async function getServerSideProps(){

    const providers = await getProviders();

    console.log("hello");
    console.log(providers);
   
    return {
        props:{
            providers
        },
    };

};

export default signin
