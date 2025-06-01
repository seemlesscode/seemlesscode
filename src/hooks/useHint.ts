import { useEffect } from "preact/hooks";

export default function useHint() {
  useEffect(() => {
    const lines = [
      "In this part of the web, there's two kinds of people...",
      "Those who play by the book...",
      "And those who cheat.",
      "",
      "I cheat.",
    ];
    const style = (size: string) =>
      `color: #000000; background-color: #ffffff; font-size: ${size}rem; font-family: monospace;`;

    const asciiTuco = `
██████▓▒░░░░░                      ░█████▒   
█████▓▒▒░░░░░░░░                    █████▓   
████░▒░░░░░▓██████▒░               ░█████▓   
███▓░░░ ░░░░░░░▓▒▒███▓░          ░░ █████░   
██▓░░░░░  ░░▒▒  ▒██▓░░░    ░▒███▓██ █████░   
██▓░░ ░ ░░░░░░   ░░░░       ░░▒███  ░███░    
███░░░░         ░░░░ ░░        ░░▒  ░███░    
█▓▓░░░                              ░██░     
▒▒▓░    ░     ░      ░░░            ██░      
░▓▒▒   ░░            ░              ██░      
▒█▓▓░░░░░░░       ░ ░░░░            ██░      
███▓░ ░▓░▓░        ░ ░██▓░░         █▓░      
░▒█▓▓▒▓▓▓░░    ░  ░░░░▓████░      ░░█░       
░▓▓▓▓████▒░░░░░▓█████████████░    ▒██        
░█▓▓█▓░██▒░░░░████▓░░░░░░ ░░▓██  ░█▓░        
░█▓▒░▒▓▓█░░ ▓████▓▓░░░░░░██░ ██▓ ▓█          
▒▓▓▒▓▓▒▒█▒░░▓█▓░ ░░░         ▓██▒█▒          
░▓▓░▓█▓██▓▓▓██▒░░   ░▓███▓░  ░████░          
███████████▓▓█▓▓░░  ░░░░░     ███░           
  ▒█████████████▓░░░░░▒▒░░░░ ▒▓██            
     █████████████████▓▓▒▒▒ ░▓██░            
        █████████████▓█████░░▓▓              
           ░███████████████░                 
                ░░░░░░                       
`;
    console.log(`%c${asciiTuco}`, style("1"));

    let i = 0;
    const printNextLine = () => {
      if (i < lines.length) {
        console.log("%c" + lines[i], style("1.5"));
        i++;
        setTimeout(printNextLine, 1000);
      }
    };

    setTimeout(printNextLine, 800);
  }, []);

  return null;
}
