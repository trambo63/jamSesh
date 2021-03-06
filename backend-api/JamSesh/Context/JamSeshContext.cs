﻿using JamSesh.Models;
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
        public DbSet<ProfileJam> ProfileJams { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=(localdb)\\mssqllocaldb;Database=JamSeshDb;Trusted_Connection=True;";

            optionsBuilder.UseSqlServer(connectionString)
                          .UseLazyLoadingProxies();
            base.OnConfiguring(optionsBuilder);
        }


        //private Jam CreateJam()
        //{




        //    Jam myJam = new Jam
        //    {
        //        Id = 1,
        //        Name = "Acoustic Rock in the Park",
        //        Location = "6500 Cleveland Memorial Shoreway, Cleveland, OH 44102",
        //        Description = "Need 2 more people to play some 80s Rock at Edgewater Park. Could use vocals and bass/guitar.",
        //        EventDate = DateTime.Now,
        //        MaxNumberOfAttendees = 3,
        //        Image = "JamIcon.jpg",
        //        ProfileId = 1
        //    };


        //    //Profile myProfile = new Profile
        //    //{
        //    //    Id = 2,
        //    //    Name = "Eddie",
        //    //    Image = "DefaultProfilePhoto.jpg",
        //    //    Instruments = "Keys, Acoustic Guitar, Vocals",
        //    //    Description = "I like playing jazz standards in small trios",
        //    //    Location = "7705 W Ridgewood Dr, Parma, OH 44129"
        //    //};

        //    //JamAttendees jamAttendees = new JamAttendees
        //    //{
        //    //    Id = 1
        //    //};
        //    //jamAttendees.Attendees.Add(myProfile);
        //    //myJam.Attendees = jamAttendees;
        //    return myJam;


        //}

        protected override void OnModelCreating(ModelBuilder modelbuilder)
        {

            modelbuilder.Entity<ProfileJam>().HasKey(sc => new { sc.ProfileID, sc.JamID });

            modelbuilder.Entity<Profile>().HasData(

            new Profile
            {
                ProfileId = 1,
                Name = "Brandon",
                Image = "AvatarImage1.png",
                Instruments = "Bass, Drums",
                Description = "New to the area, and I just want to get together with some people on the weekends to play some tunes",
                Location = "North Olmsted, OH",
                Password = "Welcome"
            },

            new Profile
            {
                ProfileId = 2,
                Name = "Eddie",
                Image = "AvatarImage2.png",
                Instruments = "Keys, Acoustic Guitar, Vocals",
                Description = "I like playing jazz standards in small trios",
                Location = "Parma, OH",
                Password = "Welcome"
            },

            new Profile
            {
                ProfileId = 3,
                Name = "Neil",
                Image = "AvatarImage3.png",
                Instruments = "Mandalin, Guitar, Bass, Drums",
                Description = "I've got more instruments than just the ones I play. I'm usually available on the weekends. LET'S JAM",
                Location = "Brooklyn, OH",
                Password = "Welcome"
            }

            );

            modelbuilder.Entity<Jam>().HasData(
            new Jam
            {
                JamId = 1,
                Name = "High Voltage Acoustic Rock",
                Location = "333 Foundry St, Medina, OH 44256",
                Description = "Need 2 more people to play some 80s Rock at Edgewater Park. Could use vocals and bass/guitar.",
                EventDate = DateTime.Now,
                MaxNumberOfAttendees = 3,
                Image = "High-Voltage-Acoustic-Rock.jpg"
            },

            new Jam
            {
                JamId = 2,
                Name = "Castle Noel Big Band",
                Location = "260 S Court St, Medina, OH 44256",
                Description = "I need a lot of people and a pretty decent range of intruments so we can meet at castle noel and play Duke Ellington and Count Basie songs.",
                EventDate = DateTime.Now,
                MaxNumberOfAttendees = 7,
                Image = "Castle-Noel.jpg"
            },

            new Jam
            {
                JamId = 3,
                Name = "Church Lot Duet",
                Location = "606 E Washington St, Medina, OH 44256",
                Description = "I need a drummer to play along with me while I play acoustic guitar and sing. Looking to play some popular gospel standards at my church this Sunday!",
                EventDate = DateTime.Now,
                MaxNumberOfAttendees = 2,
                Image = "Church.jpg"
            }

            );


            modelbuilder.Entity<ProfileJam>().HasData(
               new ProfileJam
               {
                   ProfileID = 1,
                   JamID = 1

               }

               );
        }
    }
}
