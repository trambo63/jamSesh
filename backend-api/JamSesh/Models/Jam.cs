using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JamSesh.Models
{
    public class Jam
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public string Description { get; set; }
        public DateTime EventDate { get; set; }
        public int MaxNumberOfAttendees { get; set; }
        public string Image { get; set; }
        public List<Profile> Attendees { get; set; }

        public int ProfileId { get; set; }
        public Profile CreatorProfile { get; set; }
    }
}
