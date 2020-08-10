﻿// <auto-generated />
using System;
using JamSesh.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace JamSesh.Migrations
{
    [DbContext(typeof(JamSeshContext))]
    partial class JamSeshContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("JamSesh.Models.Jam", b =>
                {
                    b.Property<int>("JamId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("EventDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Image")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Location")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("MaxNumberOfAttendees")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("JamId");

                    b.ToTable("Jams");

                    b.HasData(
                        new
                        {
                            JamId = 1,
                            Description = "Need 2 more people to play some 80s Rock at Edgewater Park. Could use vocals and bass/guitar.",
                            EventDate = new DateTime(2020, 8, 7, 13, 51, 18, 620, DateTimeKind.Local).AddTicks(5908),
                            Image = "JamIcon.jpg",
                            Location = "333 Foundry St, Medina, OH 44256",
                            MaxNumberOfAttendees = 3,
                            Name = "High Voltage Acoustic Rock"
                        },
                        new
                        {
                            JamId = 2,
                            Description = "I need a lot of people and a pretty decent range of intruments so we can meet at castle noel and play Duke Ellington and Count Basie songs.",
                            EventDate = new DateTime(2020, 8, 7, 13, 51, 18, 625, DateTimeKind.Local).AddTicks(5766),
                            Image = "JamIcon.jpg",
                            Location = "260 S Court St, Medina, OH 44256",
                            MaxNumberOfAttendees = 7,
                            Name = "Castle Noel Big Band"
                        },
                        new
                        {
                            JamId = 3,
                            Description = "I need a drummer to play along with me while I play acoustic guitar and sing. Looking to play some popular gospel standards at my church this Sunday!",
                            EventDate = new DateTime(2020, 8, 7, 13, 51, 18, 625, DateTimeKind.Local).AddTicks(5903),
                            Image = "JamIcon.jpg",
                            Location = "606 E Washington St, Medina, OH 44256",
                            MaxNumberOfAttendees = 2,
                            Name = "Church Lot Duet"
                        });
                });

            modelBuilder.Entity("JamSesh.Models.Profile", b =>
                {
                    b.Property<int>("ProfileId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Instruments")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Location")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ProfileId");

                    b.ToTable("Profiles");

                    b.HasData(
                        new
                        {
                            ProfileId = 1,
                            Description = "New to the area, and I just want to get together with some people on the weekends to play some tunes",
                            Image = "DefaultProfilePhoto.jpg",
                            Instruments = "Bass, Drums",
                            Location = "North Olmsted, OH",
                            Name = "Brandon",
                            Password = "Welcome"
                        },
                        new
                        {
                            ProfileId = 2,
                            Description = "I like playing jazz standards in small trios",
                            Image = "DefaultProfilePhoto.jpg",
                            Instruments = "Keys, Acoustic Guitar, Vocals",
                            Location = "Parma, OH",
                            Name = "Eddie",
                            Password = "Welcome"
                        },
                        new
                        {
                            ProfileId = 3,
                            Description = "I've got more instruments than just the ones I play. I'm usually available on the weekends. LET'S JAM",
                            Image = "DefaultProfilePhoto.jpg",
                            Instruments = "Mandalin, Guitar, Bass, Drums",
                            Location = "Brooklyn, OH",
                            Name = "Neil",
                            Password = "Welcome"
                        });
                });

            modelBuilder.Entity("JamSesh.Models.ProfileJam", b =>
                {
                    b.Property<int>("ProfileID")
                        .HasColumnType("int");

                    b.Property<int>("JamID")
                        .HasColumnType("int");

                    b.HasKey("ProfileID", "JamID");

                    b.HasIndex("JamID");

                    b.ToTable("ProfileJams");

                    b.HasData(
                        new
                        {
                            ProfileID = 1,
                            JamID = 1
                        });
                });

            modelBuilder.Entity("JamSesh.Models.ProfileJam", b =>
                {
                    b.HasOne("JamSesh.Models.Jam", "Jam")
                        .WithMany("JamsAttending")
                        .HasForeignKey("JamID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("JamSesh.Models.Profile", "Profile")
                        .WithMany("JamsAttending")
                        .HasForeignKey("ProfileID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
