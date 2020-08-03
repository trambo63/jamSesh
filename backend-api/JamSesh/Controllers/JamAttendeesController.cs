using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JamSesh.Models;
using JamSesh.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JamSesh.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JamAttendeesController : ControllerBase
    {
        private JamSesh.Repositories.IRepository<JamAttendees> jamAttendeesRepo;

        public JamAttendeesController(IRepository<JamAttendees> jamAttendeesRepo)
        {

            this.jamAttendeesRepo = jamAttendeesRepo;

        }
        // GET: api/JamAttendees
        [HttpGet]
        public IEnumerable<JamAttendees> Get()
        {
            return jamAttendeesRepo.GetAll();
        }

        // GET: api/JamAttendees/5
        [HttpGet("{id}")]
        public JamAttendees Get(int id)
        {
            JamAttendees jamAttendees = jamAttendeesRepo.GetById(id);
            return jamAttendees;
        }

        // POST: api/JamAttendees
        [HttpPost]
        public IEnumerable<JamAttendees> Post([FromBody] JamAttendees value)
        {
            jamAttendeesRepo.Create(value);
            return jamAttendeesRepo.GetAll();
        }

        // PUT: api/JamAttendees/5
        [HttpPut("{id}")]
        public JamAttendees Put([FromBody] JamAttendees value)
        {
            jamAttendeesRepo.Update(value);
            return jamAttendeesRepo.GetById(value.Id);
        }
    
         // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IEnumerable<JamAttendees> Delete(int id)
        {
            var jamAttendees = jamAttendeesRepo.GetById(id);
            jamAttendeesRepo.Delete(jamAttendees);
            return jamAttendeesRepo.GetAll();
        }
    }
}
