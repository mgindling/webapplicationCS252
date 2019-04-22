import static java.lang.Math.toIntExact;
public class User {
    private String name;
    private int total;
    private int made;
    //private float score;

    public User(String name, int total, int made)
    {
        this.total = total;
        this.made = made;
        this.name = name;
        //this.score = ((float)(made/total)) * 100;
    }

    public User(Object name, Object total, Object made)
    {
        this.total = toIntExact((long)total);
        this.made = toIntExact((long)made);
        this.name = name.toString();
        //this.score = ((float)(made/total)) * 100;
    }

    public String getName() {
        return name;
    }

//    public float getScore() {
//        return score;
//    }

    public int getMade() {
        return made;
    }

    public int getTotal() {
        return total;
    }

    public void setMade(int made) {
        this.made = made;
    }

    public void setName(String name) {
        this.name = name;
    }

//    public void setScore(float score) {
//        this.score = score;
//    }

    public void setTotal(int total) {
        this.total = total;
    }
}
