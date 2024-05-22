namespace webAPI.Model
{
    public class OrchardModel
    {
        private int idOrchard = 0;
        private int orchardLength = 0;
        private int orchardWidht = 0;
        private int squereLength = 0;
        private int squereWidth = 0;
        private int squeresLength = 0;
        private int squeresWidth = 0;
        private int idUser = 0;

        public int IdOrchard { get => idOrchard; set => idOrchard = value; }
        public int OrchardLength { get => orchardLength; set => orchardLength = value; }
        public int OrchardWidht { get => orchardWidht; set => orchardWidht = value; }
        public int SquereLength { get => squereLength; set => squereLength = value; }
        public int SquereWidth { get => squereWidth; set => squereWidth = value; }
        public int SqueresLength { get => squeresLength; set => squeresLength = value; }
        public int SqueresWidth { get => squeresWidth; set => squeresWidth = value; }
        public int IdUser { get => idUser; set => idUser = value; }
    }
}
