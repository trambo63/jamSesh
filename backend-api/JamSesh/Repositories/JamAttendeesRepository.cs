using JamSesh.Context;
using JamSesh.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JamSesh.Repositories
{
    public class JamAttendeesRepository : Repository<JamAttendees>, IRepository<JamAttendees>
    {
        public JamAttendeesRepository(JamSeshContext context) : base(context)
        {

        }
    }
}
