

export default function Landing(){
  return(

      <div className="blob h-1/3 ml-20 pt-5 pb-5 z-10 top-1/4 absolute bg-gradient-to-r from-lighter-blue to-some-blue">
        <div className="pt-20 pl-20 pr-20">
        <h1 className="text-6xl text-ashe-rose">I'm Callum Stringer.</h1>
        <h2 className="text-4xl text-ashe-rose">Computer Scientist. Programmer.</h2>
        </div>
        <style jsx>{`
        .blob{
        border-radius: 34% 66% 59% 41% / 73% 53% 47% 27% ;
        }
        
        
        `}
        </style>
      </div>

  );
}