using JamSesh.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JamSesh.Context
{
    public class JamSeshContext : DbContext
    {
        public DbSet<Jam> Jams { get; set; }
        public DbSet<Profile> Profiles { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=(localdb)\\mssqllocaldb;Database=JamDb;Trusted_Connection=True;";

            optionsBuilder.UseSqlServer(connectionString)
                          .UseLazyLoadingProxies();
            base.OnConfiguring(optionsBuilder); 
        }

            protected override void OnModelCreating(ModelBuilder modelbuilder)
            {
            //modelbuilder.Entity<Jam>().HasData();

            //modelbuilder.Entity<Profile>().HasData();
        }
    }
}
