//chuyen tu switch case sang if else o ex01

let action = "delete"; 
if (action === "create" || action === "add" || action === "insert") {
    console.log("them moi");
    
} else if (action === "update" || action === "edit") {
    console.log("cap nhat");
} else if (action === "delete" || action === "remove") {
    console.log("xoa");
} else {
    console.log("khong hop le");
    
}