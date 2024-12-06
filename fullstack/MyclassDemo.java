
import java.io.DataOutputStream;
import java.net.Socket;

public class MyclassDemo {
    public static void main(String[] args) {
        try {
            Socket S = new Socket("Local host",21);
            DataOutputStream disr = new DataOutputStream(S.getOutputStream());
            disr.writeUTF("Hi server");
        } catch (Exception e) {
            System.err.println(e);
        }
    }
}
