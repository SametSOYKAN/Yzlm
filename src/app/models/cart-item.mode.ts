import { Arac } from "./arac";

export interface CartItem {
    
    arac: Arac;
    quantity: number;
}

//  Sepete ekleyeceğim Item. Sepette CartItem'ı güncelleyeceğim.
//  Sepet yönetimine ihtiyaç var. Sepete ekle, sil, çıkar vb.
//  Sepete eklediğim ürünleri nerede tutacağım? Her component'in ihtiyaç duyduğu hizmete servisten ulaşılır.
//  Ürünü sepete eklediğimde kullanıcı ile eşleştirmeye gerek yok. Ürünü aldığında kullanıcı ile eşleşecek.
//  Servislere gelip 
