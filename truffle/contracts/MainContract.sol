pragma solidity ^0.4.22;
contract MainContract {

struct Documents {
    
    string aadhar;

}

 
struct MultiSig
{
    
    address inst;
    address stud;
Documents documents;
    
    
}



mapping(address=>MultiSig) public wallets ;







function createNewMultiSigbyUser(address instituteaddress) public {
        
        var wa = wallets[msg.sender];
        wa.inst=instituteaddress;
        wa.stud=msg.sender;
    

}



function uploadAadhar(string a){
    
    var wa=wallets[msg.sender];

    
    
    
}
}

