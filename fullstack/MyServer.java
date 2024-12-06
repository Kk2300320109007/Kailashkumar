
import java.io.DataInputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class  MyServer {
    public static void main(String[] args) {
        try {
            ServerSocket ss = new ServerSocket(80);
            Socket s  = ss.accept();
            DataInputStream lis = new DataInputStream(s.getInputStream());
            String str  = (String)lis.readUTF();
            System.err.println("Message"+str);
            ss.close();
        } catch (Exception e) {
            System.err.println(e);
        }
    }
    
}
